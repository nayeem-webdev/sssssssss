const Footer = () => {
  return (
    <div className="bg-white mt-24">
      <div className="container mx-auto px-5 md:px-10 py-24">
        <div className="border-b text-center pb-8 mb-8 ">
          <h2 className="font-bold text-3xl pb-3">Gadget Mafia</h2>
          <p className="text-black text-opacity-60  font-medium">
            Rule the Tech Scene with Gadget Mafia
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-40 justify-center">
          <div className="text-center">
            <h3 className="font-bold text-[18px] pb-4 ">Services</h3>
            <p className="pb-2">Product Support</p>
            <p className="pb-2">Order Tracking</p>
            <p className="pb-2">Shipping & Delivery</p>
            <p className="pb-2">Returns</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[18px] pb-4 ">Company</h3>
            <p className="pb-2">About Us</p>
            <p className="pb-2">Careers</p>
            <p className="pb-2">Contact</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[18px] pb-4 ">Legal</h3>
            <p className="pb-2">Terms of Services</p>
            <p className="pb-2">Privacy Policy</p>
            <p className="pb-2">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
