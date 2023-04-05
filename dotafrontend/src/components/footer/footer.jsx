import Logo from "../../imgs/logos/logo1.png";

const Footer = () => {
  return (
    <footer class="items-center justify-center bg-white p-4 dark:bg-gray-800">
      <div class="items-center justify-center text-center">
      <a>
        {" "}
        <img class="h-14 w-72 items-center justify-center" src={Logo} />{" "}
      </a>
      </div>
      <p class="my-6 items-center justify-center text-gray-500 dark:text-gray-400">
        The Cutting Edge in DOTA 2 Coaching
      </p>

      <span class="text-sm text-gray-500 dark:text-gray-400">
        © 2021-2022{" "}
        <a href="#" class="hover:underline">
          Dotorial™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
