// import type { NextConfig } from "next";

import { hostname } from "os";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns :[
      {
        protocol:"https" ,
        hostname: "www.sfdachina.com" 
      }
    ]
  }
  
};

export default nextConfig;
