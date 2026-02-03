"use client";

import { useMemo, useState } from "react";
import FloatingHeartsKisses from "../components/FloatingHeartsKisses";
import JumpscareModal from "../components/JumpscareModal";
import RoseBouquet from "../components/RoseBouquet";
import PhotoStrip from "../components/PhotoStrip";
import Collage from "../components/Collage";
import PhotoFrameAround from "../components/PhotoFrameAround";

export default function Home() {
  // ✅ EDIT THIS:
  const GIRLFRIEND_NAME = "Anoushka";

  const [step, setStep] = useState(1);

  // Page 1 logic
  const [noClicks, setNoClicks] = useState(0);
  const [showJumpscare, setShowJumpscare] = useState(false);

  const noDisabled = noClicks >= 3;

  const handleNo = () => {
    setNoClicks((n) => n + 1);
    setShowJumpscare(true);
  };

  const handleYes = () => setStep(2);
  const handleBack = () => setStep((s) => (s <= 2 ? 2 : s - 1));

  const page1Message = useMemo(() => {
    if (noClicks >= 3) return "Babe stop messing with me and click yes mrfph";
    if (noClicks === 2) return "You think you are funny huh 🤨";
    if (noClicks === 1) return "Okay you did it once now stop 😤";
    return " ";
  }, [noClicks]);

  return (
    <main className="container">
      {/* Background floaties always on (cute continuity) */}
      <FloatingHeartsKisses intensity={step === 1 ? 32 : 18} />

      {step === 1 && (
        <section className="card">
          <div className="heroCenter">
            <h1 className="title">Hi {GIRLFRIEND_NAME} 💘</h1>
            <p className="subtitle">
              I told you I was going to be creative, hopefully you didn't know what I was up to LOL. Now if you could please answer the following question CORRECTLY that would be great 😊
            </p>
          </div>


          <div className="centerBlock">
            <div className="question">Will you be my Valentine?</div>

            <div className="btnRow">
              <button className="primary" onClick={handleYes}>
                Yes 💖
              </button>

              {!noDisabled ? (
                <button className="danger" onClick={handleNo}>
                  No 🙄
                </button>
              ) : (
                <button className="danger" style={{ opacity: 0.35 }} disabled>
                  No 🙄
                </button>
              )}
            </div>

            <div className="smallHint">{page1Message}</div>
          </div>

          <JumpscareModal
            open={showJumpscare}
            onClose={() => setShowJumpscare(false)}
            imageSrc="/jumpscare.jpg"
            title="WRONG BUTTON 😈"
          />
        </section>
      )}

      {step === 2 && (
        <section className="card">
          <div className="heroCenter">
            <h1 className="title">You said yes 😎</h1>
            <p className="subtitle">
              Look I got you flowers! LOL I know I owe you flowers for sure, but this actually took such a ridiculous amount of math and coding to get this so I hope you like it :)
            </p>
          </div>

          <div className="twoCol">
            <RoseBouquet />

            <div className="noteBox">
              <strong style={{ color: "var(--text)" }}>Dear Anoushka:</strong>
              <div style={{ marginTop: 10 }}>         
                Happy valentines day Anoushka! I miss you so much and I wish I could be with you on the 14th and give you all the hugs and kisses that you deserve but hopefully you can feel the love I have for you through this too! To be honest, I knew I wanted to do something creative like this for valentines day. I want to just tell you that I am so happy that you are in my life and I can’t even begin to explain how much you mean to me. Believe me I will try but you know as well as I do that it will never be enough for me. I could keep going on and on about you. Keep going to the next pages I have a lot more to say! Obviously ✋
              </div>
            </div>
          </div>

          <div className="cornerCta">
            <button className="primary" onClick={() => setStep(3)}>
              When you are done reading this go here →
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="card">
            {/* <h1 className="title">Us 🥺</h1>
            <p className="subtitle">
            I love all of our photos so this was very difficult to choose.
            </p> */}

          <div className="heroCenter">
            <h1 className="title">Us 🥺</h1>
            <p className="subtitle">
              I love all of our photos so this was very difficult to choose.            
            </p>
          </div>

            <PhotoFrameAround
            images={["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg"]}
            >
            <div className="textAreaBig">
                <strong style={{ color: "var(--text)" }}>You are the best girlfriend:</strong>
                <div style={{ marginTop: 10 }}>
                It is so surreal that you are my girlfriend at times and then I see these photos and I just think wow like this is unreal. But it is real! But seriously like you are just such an amazing girlfriend and I know how much you care for me. I feel like for me today is a day that obviously I would express how much I love you but beyond that I do want to say thank you. You make me a better person, you make me feel special, and there is never a moment where I don’t feel grateful for you. I appreciate you so much and I know that you are always there for me.
                </div>
            </div>

            <div className="footerNav" style={{ marginTop: 14, justifyContent: "space-between" }}>
                <button onClick={handleBack}>← Flowers</button>
                <button className="primary" onClick={() => setStep(4)}>
                  One more page madam →
                </button>
            </div>
            </PhotoFrameAround>
        </section>
        )}


      {step === 4 && (
        <>
          <div className="footerNav" style={{ justifyContent: "flex-start" }}>
            <button onClick={handleBack}>← Want a recap?</button>
          </div>
          <Collage
              title="One last thing 💞"
              placeholderText="Anoushka, I love you. Generally, I feel like I know what to say but in this moment I am just out of words. I feel excited, happy and I am just so in love with who you are. I am so lucky that I found you. These pictures honestly I know you probably are like why did I choose them, but to me, they make me fall for you more and more. The dates, laughs, cringe moments, rot, lore, the yap in general, I love every moment with you. It’s you madam. I am always here for you and supporting you, I promise. I wish I could hug and kiss you right now, but I know I will see you so soon. Until then, happy valentines day once again Anoushka, I love you so much."
              centerImageSrc="/center.jpg" // 👈 NEW IMAGE
              images={[
              { src: "/collage1.jpg", top: "8%", left: "6%", rot: "-8deg" },
              { src: "/collage2.jpg", top: "10%", right: "6%", rot: "9deg" },
              { src: "/collage3.jpg", bottom: "10%", left: "10%", rot: "7deg" },
              { src: "/collage4.jpg", bottom: "8%", right: "10%", rot: "-10deg" },
              ]}
          />
        </>
      )}

    </main>
  );
}
