from setuptools import setup, find_packages

setup(
    name="newscraper",
    version="0.1",
    packages=find_packages(),
     entry_points={"scrapy": ["settings = newscraper.settings"]},
    install_requires=[
        "scrapy"  # Add required dependencies
        "psycopg2-binary",
    ],
)
