import React, { FC } from "react";
import style from '../styles/css/Quizz.module.css'

export const Quizz: FC = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.start}>
          <span>Pytanie 3/10</span> {/* SPAN AS ANY LITTLE TEXT */}
          <p>Sprawdź swoją wiedzę z filmu "Troja"</p> {/* P AS ANY MAIN TEXT */}
          <div className={style.btn}>
            <button>START</button> {/* BUTTON AS ANNY INPUT/ OPTION */}
          </div>
        </div>
      </div>
    </>
  )
}

// https://i.imgur.com/imgQUQq.png