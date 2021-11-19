function Footer() {
  return (
    <footer className="page-footer colorAw">
      <div className="container">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
