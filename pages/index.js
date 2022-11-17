import React from 'react';
import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link  href="/"> <a className="link">main</a></Link>
                <Link href="/users">  <a className="link">users</a></Link>
            </div>
            <h1>kejfg</h1>
            <style jsx>
                {`
                  .navbar {
                  background: orange;
                  padding: 15px;
                  }
                  .link {
                  text-decoration: none;
                  color: white;
                  font-size: 20px;
                  margin: 10px;
                  }
                `}
            </style>
        </div>
    );
};

export default Index;