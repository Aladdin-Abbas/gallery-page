import Gallery from "../components/Gallery";

export default function Home({ imgData }) {
  return <Gallery imgData={imgData} />;
}

export async function getStaticProps() {
  let imgData;
  try {
    const response = await fetch(
      "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
    );

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    imgData = await data;
  } catch (e) {
    console.log(e);
    imgData = false;
  }

  if (!imgData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      imgData,
    },
  };
}
