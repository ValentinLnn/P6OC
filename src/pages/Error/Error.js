import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Error404 from "../../components/Error/Error404";

function Error() {
    return(
        <div className="error_page">
        <Header />
        <main>
          <Error404 />
        </main>
        <Footer />
      </div>
    )
}

export default Error