import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
        <NavbarItem title="Operating Systems" param="operating-systems"/>
        <NavbarItem title="Office" param="office"/>
        <NavbarItem title="Adobe" param="adobe"/>


    </div>
  )
}
