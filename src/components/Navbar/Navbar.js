import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      title: 'Books',
    },
    {
      id: 2,
      path: '/analysis',
      title: 'Analysis',
    },
  ];

  return (
    <Nav
      defaultActiveKey="/"
      className="p-5"
    >
      <Nav.Item className="me-5">
        <Nav.Link href="/">Bookstore CMD</Nav.Link>
      </Nav.Item>
      {links.map((link) => (
        <Nav.Item key={link.id}>
          <Nav.Link href={link.path}>{link.title}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Navbar;
