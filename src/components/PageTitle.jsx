import PropTypes from "prop-types";
const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="container mx-auto px-5 md:px-10 py-10 text-white text-center">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-full md:w-2/3 mx-auto mt-4">{subTitle}</p>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export default PageTitle;
