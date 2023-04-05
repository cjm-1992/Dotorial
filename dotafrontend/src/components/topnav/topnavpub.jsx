import Logo from "../../imgs/logos/logo1.png";

const TopNavPub = () => {
  return (
    <header>
      <nav class="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="#" class="flex items-center">
            <img
              src={Logo}
              class="h-6 items-start sm:h-9"
              alt="Flowbite Logo"
              link
              to="/Landing"
            />
          </a>

          <div class="flex items-center lg:order-2">
            <a
              href="#"
              class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-50/20 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
            >
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNavPub;
