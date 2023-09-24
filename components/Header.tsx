interface Props {
  type: string;
  query: string;
  category: string;
}
const Header = ({ type, query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{query}" in "{category}"
      </h1>
    );
  }
  if (query) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{query}"
      </h1>
    );
  }
  if (category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{category}"
      </h1>
    );
  }
  return (
    <h1 className="heading3 self-start text-white-800">No Results Found</h1>
  );
};

export default Header;
