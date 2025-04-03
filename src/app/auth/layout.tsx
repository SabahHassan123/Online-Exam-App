import LeftSide from "@/components/left-side.auth";
import CLink from "@/components/link";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const socialMediaIcons = [
    {
      id: 1,
      icon: <FcGoogle />,
      iconName: 'google'
    },
    {
      id: 2,
      icon: <FaTwitter />,
      iconName: 'twitter'
    },
    {
      id: 3,
      icon: <FaFacebook />, 
      iconName: 'facebook' 
    },
    {
      id: 4,
      icon: <IoLogoApple />,
      iconName: 'apple'
    },
  ]

  return (
    <section className="flex h-screen w-full bg-white">

      {/* left side of the layout */}
      <div className="bg-indigo-50 lg:w-1/2 sm:w-0 md:w-0 xs:w-0">
          <LeftSide />
      </div>

      {/* right side of the authentication layout */}
      <div className="bg-white lg:w-1/2 sm:w-full md:w-full xs:w-full">
          {/* Register and Signin navigation */}
          <div className="flex justify-end items-center gap-4 pr-6">
            <CLink href="signin" hyperText="Sign in" boldText="font-medium"/>
            <Button variant='outline' className="text-main rounded-xl">
              <CLink href="signup" hyperText="Register" />
            </Button>
          </div>
          
          <div className="w-full pt-5 flex justify-center ">
            <div className="w-3/5">
              <main>{children}</main>

              <div className="flex items-center ">
                  <div className="w-full h-px bg-gray-300"></div>
                  <span className="mx-3 text-gray-500 whitespace-nowrap text-sm">Or Continue with</span>
                  <div className="w-full h-px bg-gray-300"></div>
              </div>
              
              <div className="flex justify-evenly">
                {
                  socialMediaIcons.map( icon => (
                    <Button variant="outline" title={icon.iconName} key={icon.id} className={`${icon.iconName === 'facebook' ? 'text-facebookIconColor' : icon.iconName === 'twitter' ? 'text-twitterIconColor' : '' } rounded-xl shadow-md hover:shadow-xl`}>{icon.icon}</Button>
                  ))
                }
            </div>
            </div>
          </div>
      </div>
    </section>
  );
  }
  