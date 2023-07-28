import React from "react";

import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "./index.css";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const graphql = JSON.stringify({
  query:
    "{\r\n  posts {\r\n    nodes {\r\n      author {\r\n        node {\r\n          email\r\n          username\r\n        }\r\n      }\r\n      dateGmt\r\n      slug\r\n      seo {\r\n        canonicalUrl\r\n        description\r\n      }\r\n      excerpt\r\n    }\r\n  }\r\n}",
  variables: {},
});
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: graphql,
  redirect: "follow",
};

function App() {
  const [collectionPosts, setCollectionPosts] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);

    fetch("http://betadmin-st.ru/ivoire-bets/graphql", requestOptions)
      .then((res) => res.json())
      .then((result) => setCollectionPosts(Array.from(result.data.posts.nodes)))
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen h-full bg-[#181a2a] text-white font-body not-italic font-normal">
      <Header />
      <main className="container mx-auto px-[5px] mt-[24px]">
        <PageTitle />
        <section>
          <h2 className="text-2xl font-bold">Latest Post</h2>
          <div className="grid grid-flow-row justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-[32px] ">
            {loading ? (
              <div className="relative left-1/2 top-1/2 transform translate-x-[-50%]">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-24 w-24"></div>
              </div>
            ) : (
              collectionPosts.map((post) => (
                <React.Fragment key={post.slug}>
                  <Card post={post} />
                </React.Fragment>
              ))
            )}
          </div>
          <div className="flex justify-center font-medium  mx-auto h-auto">
            <a
              className=" py-3 px-5 rounded-[6px] border-[1px] border-[#696A75]/[.3] hover:border-[#696A75] transition-all"
              href="#"
            >
              View All Post
            </a>
          </div>
        </section>
        <div>
          <a
            className="flex items-center flex-col justify-center rounded-[12px] bg-[#242535] w-[750px] h-[100px] mx-auto my-20 border-[1px] border-[#242535] hover:border-[#4B6BFB] transition-all duration-300 hover:text-[#ffffff]"
            href="#"
          >
            <span className="text-sm text-[#696A75]">Advertisement</span>
            <span className="text-xl font-semibold text-[#696A75]">
              You can place ads
            </span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
