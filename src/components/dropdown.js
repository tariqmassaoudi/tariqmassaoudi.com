/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const categories=["Electronics",
"Pet Supplies",
"Fashion",
"Musical Instruments",
"Computing",
"Phones  Tablets",
"Baby Products",
"Books, Movies and Music",
"Industrial  Scientific",
"Garden  Outdoors",
"Grocery",
"Health  Beauty",
"Sporting Goods",
"Toys  Games",
"Gaming",
"Automobile",
"Home  Office"]
export default function DropDown({category,getCategory}) {
    function handleClick(category){
getCategory(category)

    }
    console.log("hello"+category)
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full font-sans justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 ">
          {category}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">

            {
                categories.map((category,i)=>{
                    return( <Menu.Item key={i}>
                        {({ active }) => (
                            // <Link className={classNames(
                            //     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            //     'block px-4 py-2 text-sm'
                            //   )} to={"/jumiaapp?category="+category}>{category}</Link>
                          // <a
                          //   // href={"/jumiaapp?category="+category}
                          //   href="#"
                          //   className={classNames(
                          //     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          //     'block px-4 py-2 text-sm'
                          //   )}
                          // >
                          //   {category}
                          // </a>
                             <button
                             // href={"/jumiaapp?category="+category}
                             onClick={()=>handleClick(category)}
                             className={classNames(
                               active ? 'bg-gray-100 font-sans text-gray-900 w-full' : 'text-gray-700',
                               'block px-4 py-2 font-sans text-sm w-full'
                             )}
                           >
                             {category}
                           </button>
                        )}
                      </Menu.Item>)
                })
            }

         
           
 
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}