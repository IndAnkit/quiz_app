import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="bg_image bg-bgPurple min-h-[700px] h-full flex flex-col md:items-center justify-end md:justify-center">
      <div className="relative p-5 bg-white w-full h-2/3 md:w-2/4 md:h-2/3  rounded-t-3xl md:rounded-b-3xl flex flex-col ">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
