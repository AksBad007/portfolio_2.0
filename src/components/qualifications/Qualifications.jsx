import { useState } from 'react'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { BsCalendar3 } from 'react-icons/bs'
import Heading from '../common/Heading'
import './Qualifications.css'

const Qualifications = () => {
  const [toggleState, updateToggleState] = useState(1)

  const toggleTab = (idx) => updateToggleState(idx)

  return (
    <section id="qualifications">
      <Heading intro="My Personal Journey" main="Qualifications"/>

      <div className="container qualifications__container">
        <div className="qualifications__tabs">
          <div
            className={
              toggleState === 1
              ? "qualifications__btn btn btn-primary qualifications__active btn-flex"
              : "qualifications__btn btn btn-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <FaGraduationCap className='qualifications__icon'/> Education
          </div>

          <div
            className={
              toggleState === 2
              ? "qualifications__btn btn btn-primary qualifications__active btn-flex"
              : "qualifications__btn btn btn-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <FaBriefcase className='qualifications__icon'/> Experience
          </div>
        </div>

        <div className="qualifications__sections">
          <div className={
            toggleState === 1
            ? "qualifications__content qualifications__content-active"
            : "qualifications__content"
          }>
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Master's in Computer Applications</h3>
                <span className="qualifications__subtitle">Guru Nanak Dev Univeristy</span>
                <div className="qualifications__calendar">
                  <BsCalendar3 /> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div></div>
            </div>

            <div className="qualifications__data">
              <div></div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div>
                <h3 className="qualifications__title">Bachelor's in Computer Applications</h3>
                <span className="qualifications__subtitle">Guru Nanak Dev Univeristy</span>
                <div className="qualifications__calendar">
                  <BsCalendar3 /> 2018 - 2021
                </div>
              </div>
            </div>

            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Class XII</h3>
                <span className="qualifications__subtitle">Shri Ram Ashram Sen. Sec. School</span>
                <div className="qualifications__calendar">
                  <BsCalendar3 /> 2018
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div></div>
            </div>

            <div className="qualifications__data">
              <div></div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div>
                <h3 className="qualifications__title">Class X</h3>
                <span className="qualifications__subtitle">Shri Ram Ashram Sen. Sec. School</span>
                <div className="qualifications__calendar">
                  <BsCalendar3 /> 2016
                </div>
              </div>
            </div>
          </div>

          <div className={
            toggleState === 2
            ? "qualifications__content qualifications__content-active"
            : "qualifications__content"
          }>
            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Web Developer</h3>
                <span className="qualifications__subtitle">Mansa Infotech - Punjab, India</span>
                <div className="qualifications__calendar">
                  <BsCalendar3 /> July 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div></div>
            </div>

            <div className="qualifications__data">
              <div></div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div>
                <h3 className="qualifications__title">Backend Developer</h3>
                <span className="qualifications__subtitle">Rock IMS - Punjab, India</span>
                <div className="qualifications__calendar">
                  <BsCalendar3 /> Dec 2021 - July 2022
                </div>
              </div>
            </div>

            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Frontend Intern</h3>
                <span className="qualifications__subtitle">Widhya - Remote</span>
                <div className="qualifications__calendar">
                  <BsCalendar3 /> Jan 2021 - Feb 2021
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications
