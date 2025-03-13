const Banner = () => {
  return (
    <>
      <div id="banner">
        
        <img id = "logo" src = "/banner-logo.png"/>
      </div>
      <style jsx>{`
        #logo {
          max-height: 80px;
        }
        #banner {
          background-color: rgb(128, 148, 151);
          padding: 10px;
          padding-bottom: 4px;
          font-size: 33px;
          font-family: monospace;
          font-weight: bold;
          line-height: 20px;
        }
      `}</style>
    </>
  );
};

export default Banner;
