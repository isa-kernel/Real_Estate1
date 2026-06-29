import { Link } from "react-router-dom";
import "../../styles/common/page-banner.css";

function PageBanner({
  title,
  subtitle,
  background,
  breadcrumb = []
}) {

  return (

    <section
      className="page-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${background})`
      }}
    >

      <div className="page-banner-content">

        <div className="breadcrumb">

          <Link to="/"></Link>

          {breadcrumb.map((item, index) => (

            <span key={index}>

              {" "}

              {item.link ? (

                <Link to={item.link}>
                  {item.label}
                </Link>

              ) : (

                item.label

              )}

            </span>

          ))}

        </div>

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

    </section>

  );

}

export default PageBanner;