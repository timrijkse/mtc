import styled from "@emotion/styled";
import Head from "next/head";

import Background from "../components/Background";
import Logo from "../components/Logo";
import List from "../components/List";

const Content = styled.div`
  position: relative;
  width: 100vw;
  max-width: 920px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 32px;
  z-index: 2;

  @media (max-width: 920px) {
    display: block;
    padding: 16px;
  }

  article {
    /* display: flex; */
    width: 100%;
    margin: 32px auto;
    text-align: center;

    @media (max-width: 920px) {
      display: block;
      text-align: center;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>My Table Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Background />

        <Content>
          <article>
            <Logo />
            <div>
              <h1>
                Zin in een borrel of diner?
                <br />
                Lekker een terrasje pakken?
              </h1>
              <h2>
                Vind{" "}
                <b>
                  <i>live</i>
                </b>{" "}
                je tafel en verzeker jezelf van een plekje.
              </h2>
              <h3>Binnenkort te downloaden voor iOS an Android</h3>
            </div>

            <List />
          </article>
        </Content>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,600;0,900;1,200;1,300;1,600&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        h1 {
          margin: 0 0 32px;
          font-family: "Source Sans Pro", sans-serif;
          color: #fff;
          font-size: 42px;
          font-weight: 600;
        }

        h2 {
          margin: 0 0 16px;
          font-size: 26px;
          font-weight: 400;
          font-family: "Source Sans Pro", sans-serif;
          color: #fff;
        }

        h3 {
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
          color: #000;
          font-size: 18px;
          font-weight: 600;
        }

        @media (max-width: 920px) {
          h1 {
            font-size: 28px;
          }

          h2 {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 21px;
          }

          h2 {
            font-size: 14px;
            margin-bottom: 8px;
          }

          h3 {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
