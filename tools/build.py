"""Regenerate resume.pdf and assets/img/og-image.png from their HTML sources.

Usage (from the repo root):
    python tools/build.py

Needs Microsoft Edge or Google Chrome installed, plus `pip install pypdf`
for writing PDF metadata (optional — skipped if pypdf is missing).
"""

import functools
import http.server
import os
import shutil
import subprocess
import sys
import threading
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PORT = 8799

BROWSER_CANDIDATES = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "google-chrome",
    "chromium",
    "microsoft-edge",
]

PDF_METADATA = {
    "/Title": "Muhammad Tayyab Bahaud Din - Resume",
    "/Author": "Muhammad Tayyab Bahaud Din",
    "/Subject": "Resume - Senior Flutter & AI Engineer",
    "/Keywords": (
        "Flutter, Dart, iOS, Android, Kotlin, Swift, React Native, Riverpod, BLoC, Firebase, "
        "Python, FastAPI, Django REST Framework, PostgreSQL, Docker, CI/CD, LLM, RAG, Agentic AI, "
        "Machine Learning, Azure AI Fundamentals, Senior Flutter Engineer, Mobile App Developer"
    ),
}


def find_browser():
    for candidate in BROWSER_CANDIDATES:
        path = shutil.which(candidate) or (candidate if os.path.exists(candidate) else None)
        if path:
            return path
    sys.exit("Could not find Edge or Chrome. Install one, or add its path to BROWSER_CANDIDATES.")


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def serve():
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server


def run(browser, *args):
    subprocess.run(
        [browser, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--virtual-time-budget=5000", *args],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def set_pdf_metadata(pdf_path):
    try:
        from pypdf import PdfReader, PdfWriter
    except ImportError:
        print("  (pypdf not installed — skipping PDF metadata)")
        return
    writer = PdfWriter(clone_from=PdfReader(pdf_path))
    writer.add_metadata(PDF_METADATA)
    with open(pdf_path, "wb") as f:
        writer.write(f)


def main():
    browser = find_browser()
    server = serve()
    base = f"http://127.0.0.1:{PORT}"
    try:
        pdf = ROOT / "resume.pdf"
        print("Rendering resume.pdf ...")
        run(browser, "--no-pdf-header-footer", f"--print-to-pdf={pdf}", f"{base}/resume.html")
        set_pdf_metadata(pdf)

        og = ROOT / "assets" / "img" / "og-image.png"
        print("Rendering assets/img/og-image.png ...")
        run(browser, "--window-size=1200,630", f"--screenshot={og}", f"{base}/tools/og-image.html")
    finally:
        server.shutdown()
    print("Done.")


if __name__ == "__main__":
    main()
