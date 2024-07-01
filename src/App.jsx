import React, { useState } from "react";
import SocialShare from 'react-simple-social';
import rightArrow from './assests/right-arrow.svg';

import logoLight from './assests/logo-light.svg';
import logoDark from './assests/logo-dark.svg';
import img1 from './assests/img1.svg';
import img2 from './assests/img2.svg';
import img3 from './assests/img3.svg';
import img4 from './assests/img4.svg';
import img5 from './assests/img5.svg';
import img6 from './assests/img6.svg';


import locationIcon from './assests/gps.svg'
import serviceicon from './assests/suitcase.svg'

function App() {
  const [listState, setListState] = useState(1);
  const handletoggle = (val) => {
    if (val === 1) {
      setListState(1);
    }
    else if (val === 2) {
      setListState(2);
    }
  }
  return (
    <div className="App">
      <div className="header xl:container mx-auto flex justify-between px-4 py-2">
        <img className="h-30 w-40 px-6 py-2" src={logoLight} alt="logo" />
        <div className="flex justify-between gap-4 flex-row">
          <div className="px-6 py-2 cursor-pointer text-slate-600">Find Suppliers</div>
          <div className="px-6 py-2 cursor-pointer text-slate-600">Find Suppliers</div>
          <button className="border-2 border-green-700 px-6 py-2 rounded text-green-700 font-semibold">Login / Sign Up</button>
        </div>
      </div>
      <div className="banner">
        <div className="background"></div>
        <div className="xl:container mx-auto px-4 py-24 content flex flex-col  text-center gap-8 justify-center">
          <div className="text-5xl"><span className="font-bold">Are You a Supplier?</span> <br></br> Explore Matching Opportunities.</div>
          <div className="flex gap-2 justify-center ">
            <label className="relative" htmlFor="service">
              <img className="absolute top-3 left-2 w-5" src={serviceicon} alt="service" />
              <input name="service" type="text" className="text-black border-2 rounded outline-none border-gray-500 w-80 px-8 py-2" placeholder="Search your required service here" />
            </label>
            <label className="relative" htmlFor="location">
              <img className="absolute top-3 left-2 w-5" src={locationIcon} alt="location" />
              <input name="location" type="text" className="text-black border-2 rounded outline-none border-gray-500 w-80 px-8 py-2" placeholder="Search your desired location here" />
            </label>
            <button className=" bg-green-700 px-4 py-2 rounded text-white font-medium">Search</button>
          </div>
          <div><span className="font-medium">Are you a buyer?</span> &nbsp;<span className="underline cursor-pointer">Click here if you are looking to post a requirements</span></div>
        </div>
      </div>
      <div className=" signup xl:container mx-auto px-4 py-24 flex flex-row gap-4 justify-between">
        <div className="flex-1">
          <div className="text-2xl font-bold">Ready to dive into <span className="text-blue-950">HABOT?</span></div>
          <br />
          <p className="w-4/5">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
          <br />
          <button className=" bg-green-700 flex flex-row items-center gap-8 px-4 py-2 rounded text-white font-medium">Sign up Today ! <img width={20} src={rightArrow} alt="" /></button>
        </div>
        <div className=" flex-1 ">
          <div className="grid grid-cols-2 gap-4 text-center city">
            <div className="rounded cursor-pointer font-medium px-4 py-3 border-2 border-orange-400">Abu Dhabi</div>
            <div className="rounded cursor-pointer font-medium px-4 py-3 border-2 border-orange-400">Dubai</div>
            <div className="rounded cursor-pointer font-medium px-4 py-3 border-2 border-orange-400">Sharjah & Ajman</div>
            <div className="rounded cursor-pointer font-medium px-4 py-3 border-2 border-orange-400">Fujairah</div>
            <div className="rounded cursor-pointer font-medium px-4 py-3 border-2 border-orange-400">Ras Al Khaimah</div>
            <div className="rounded cursor-pointer font-medium px-4 py-3 border-2 border-orange-400">Umm Al Quwain</div>
          </div>
        </div>
      </div>
      <div className=" video xl:container mx-auto px-8 py-20 flex flex-row gap-4 justify-around bg-sky-900 rounded">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=q8g6nf7DMjdcPj4L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="box w-1/2 text-white">
          <div className="flex flex-row gap-8">
            <button onClick={() => { handletoggle(1) }} className={('text-2xl flex-1 font-medium px-8 py-2') + (listState === 1 && (" text-orange-600 border-orange-600 border-b-2"))}>Buyer</button>
            <button onClick={() => { handletoggle(2) }} className={('text-2xl flex-1 font-medium px-8 py-2') + (listState === 2 && (" text-orange-600 border-orange-600 border-b-2"))}>Seller</button>
          </div>
          <ul className="video width-full px-2 py-8">
            {listState === 1 && (
              <>
                <li>Post your requirements.</li>
                <li>Sit back for multiple suppliers to contact you.</li>
                <li>Choose among the suppliers based on the ratings and reviews.</li>
              </>
            )}
            {listState === 2 && (
              <>
                <li>Complete your profile and get verified.</li>
                <li>Select service tags for relevant opportunities.</li>
                <li>Reach out to buyers and expand your bussiness.</li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="pt-20">
        <div className="bg-cyan-50 px-4 py-20">
          <div className=" lg:container mx-auto justify-around flex flex-row gap-4">
            <div className="text-3xl font-bold">Let Suppliers <span className="underline decoration-orange-600">Find You</span></div>
            <button className="bg-orange-600 px-8 py-3 rounded text-white font-medium">Get Verified</button>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className=" xl:container mx-auto items-center flex flex-col gap-4">
          <div className="text-3xl font-bold  ">How it works? </div>
          <p className="w-1/2 font-medium">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
          <div className="grid grid-cols-3 py-4 w-3/4">
            <div className="flex flex-col gap-4 items-center py-8 px-2 bg-cyan-50">
              <img className="w-16" src={img1} alt="" />
              <span className="w-4/5 text-center font-medium">Select Your Role and Sign Up</span>
            </div>
            <div className="flex flex-col gap-4 items-center py-8 px-2">
              <img className="w-16" src={img2} alt="" />
              <span className="w-4/5 text-center font-medium">Buyers Post Your Requirements</span>
            </div>
            <div className="flex flex-col gap-4 items-center py-8 px-2  bg-cyan-50">
              <img className="w-16" src={img3} alt="" />
              <span className="w-4/5 text-center font-medium">Review, Select, and Contact the Best Suppliers</span>
            </div>
            <div className="flex flex-col gap-4 items-center py-8 px-2">
              <img className="w-16" src={img4} alt="" />
              <span className="w-4/5 text-center font-medium">Suppliers Complete your profile and get notified for opportunities</span>
            </div>
            <div className="flex flex-col gap-4 items-center py-8 px-2  bg-cyan-50">
              <img className="w-16" src={img5} alt="" />
              <span className="w-4/5 text-center font-medium">Contact to Buyers and Share your Quote for the service</span>
            </div>
            <div className="flex flex-col gap-4 items-center py-8 px-2">
              <img className="w-16" src={img6} alt="" />
              <span className="w-4/5 text-center font-medium">Both the Parties can Connect and Make Business Leave a Feedback</span>
            </div>
          </div>
        </div>


      </div>
      <div className="bg-sky-900">
        <div className="xl:container mx-auto p-8">
          <hr className="border-t-sky-700" />
          <div className="flex text-slate-300 items-center flex-row justify-between  px-4 py-6">
            <div className="flex flex-row gap-6">
              <div>
                <img className="h-30 w-40 py-4" src={logoDark} alt="logo" />
                <span>© 2024. All Rights Reserved.</span>
              </div>
              <div className="flex flex-row gap-12">
                <div className="flex flex-col">
                  <span className="text-white font-medium pb-1">Company</span>
                  <span>About</span>
                  <span>FAQ</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium pb-1 ">Terms</span>
                  <span>Data privacy</span>
                  <span>Terms</span>
                  <span>Accesibilty</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium pb-1">Related</span>
                  <span>Find Buyer</span>
                  <span>Feedback</span>
                </div>
              </div>
            </div>
            <div className="links">
              <SocialShare height="30px" width="30px" theme="roundedunfilled" sites={[ 'linkedin','facebook', 'twitter','instagram']}></SocialShare>
            </div>
          </div>
          <hr className="border-t-sky-700" />
        </div>
      </div>
    </div>
  );
}

export default App;
