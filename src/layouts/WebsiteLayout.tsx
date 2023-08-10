import { Outlet, Link } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <div>
      <div style={{ margin: "0px auto", padding: "0px" }}>
        <div
          style={{
            display: "flex",
            padding: "15px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 0 0px",
                padding: "0px",
                fontSize: "23px",
                color: "#00f93e",
                marginLeft: "50px",
                fontWeight: "700",
              }}
            ></p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              fontWeight: "600",
            }}
          >
            <div>
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <a style={{ textDecoration: "none", color: "black" }}>Home</a>
              </Link>
            </div>
            <div>
              <a style={{ textDecoration: "none", color: "black" }} href="#">
                Shop
              </a>
            </div>
            <div>
              <a style={{ textDecoration: "none", color: "black" }} href="#">
                About
              </a>
            </div>
            <div>
              <a style={{ textDecoration: "none", color: "black" }} href="#">
                Contact
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              fontWeight: "600",
              marginRight: "50px",
            }}
          >
            <div>
              <Link style={{ textDecoration: "none" }} to={"/signup"}>
                <a style={{ textDecoration: "none", color: "black" }} href="#">
                  Register
                </a>
              </Link>
            </div>
            <div>
              <a style={{ textDecoration: "none", color: "black" }} href="#">
                Sign in
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://warmgun.com/wp-content/uploads/2021/10/banner-bds.png)",
            padding: "130px",
            backgroundSize: "cover",
            marginBottom: "50px",
          }}
        ></div>
      </div>
      <div />
      <div>
        <p
          style={{
            textAlign: "center",
            marginTop: "80px",
            fontSize: "45px",
            fontWeight: "800",
          }}
        ></p>
      </div>
      <main style={{ marginBottom: "50px" }}>
        <Outlet />
      </main>

      <div style={{ backgroundColor: "#59595b", padding: "25px" }}>
        <p style={{ margin: "0", textAlign: "center", color: "white" }}>
          Doan Van Chien
        </p>
      </div>
    </div>
  );
};

export default WebsiteLayout;
