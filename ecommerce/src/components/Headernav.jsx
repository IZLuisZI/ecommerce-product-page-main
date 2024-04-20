function HeaderNav({ Link, name }) {
  return (
    <li className="relative after:absolute after:h-px after:w-0 after:bg-gray-400 after:left-0 after:bottom-0 hover:after:w-full after:animate">
      <a href={Link}>{name}</a>
    </li>
  );
}

export default HeaderNav;
