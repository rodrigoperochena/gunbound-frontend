// frontend/src/components/Instructions.jsx
import React, { useEffect } from "react";
import usePageBodyClass from '../hooks/usePageBodyClass';
import { Link } from "react-router-dom";

const Instructions = () => {
  usePageBodyClass('instructions-page'); // Add class to <body>
  useEffect(() => {
    document.title = "How to Join Our Gunbound Thor's Hammer Private Server | Gunbound Thors Hammer Private Server";
  }, []);

  return (
    <div className="instructions">
      <div className='container'>
        <article className="column">
          <h1 className="heading">How to Join Our Gunbound Thor's Hammer Private Server</h1>
          <div className="how-to">
            <p>This is a casual private server hosted on a couple of virtual machines in our home network. Since it’s set up this way, we need to configure things in a specific way to make it work and connect properly.</p>
            <p>Here’s what you need to do to get everything set up and running.</p>
            <ol>
              <li>
                <h2 className='heading'>Game Client</h2>
                <p>First, download and install the game (<em>Do not run it yet</em>).</p><a href="http://www.mediafire.com/download/qcmq7ybg525qz6o/Gunbound_Classic_315.exe" className="button">Download Game Client</a>
                <p>Next, download and apply the game configuration. It's a <code>.reg</code> file that updates the registry settings for the game.</p><p>If you’re curious, you can open the file in a text editor to check what it changes in the registry. Or, if you prefer, you can manually update the registry using the settings from the file.</p><a href="/gunbound-config.reg" className="button" download >Download Game Config</a>
              </li>
              <li>
                <h2 className="heading">Network Setup</h2>
                <p>We’re using ZeroTier to handle the network connection. It’s an open-source virtual networking app that’s super easy to set up. Plus, the client you’ll need to connect is lightweight.</p>
                <a href="https://www.zerotier.com/download/" className="button">Download ZeroTier Client</a>
                <p>Install ZeroTier and connect using the netowrk ID: <code>a0cbf4b62abc9bd2</code>.</p>
                <p>We’ll approve your request to join the network, and that’s it—you’ll be part of the network.</p>
              </li>
              <li>
                <h2 className="heading">Register Account</h2>
                <p>By now, you should be able to connect to the game server. The last step is creating a game account.</p>
                <Link to='register' className="button">Register</Link>
              </li>
            </ol>
            <p>Once you’ve got your account set up, you’re ready to play! 🎉 If you run into any issues, let us know.</p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Instructions;