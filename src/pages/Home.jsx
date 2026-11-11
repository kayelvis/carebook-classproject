import React from 'react'
import SearchBar from '../components/SearchBar'
import { doctorsDetails } from '../data/sampleDoctors'
import { doctorSpecialties } from '../data/specialties'
import Avater from '../components/Avater'
import { TiTick } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FEATURES } from '../data/features'
import { FaLongArrowAltRight } from "react-icons/fa";
import heroImage from "../assets/illustrations/hero-heartbeat.svg"

function HomePage() {
  return (
    <>
      <section className='home-hero full-bleed'>
        <div className='home-inner home-hero-grid'>
          <div className='hero-left'>
            <h1>See the right doctor, without the waiting room.</h1>
            <p className='lead'>Search approved doctors,pick a time that suits you and pay securely with Paystack.
              Your booking is confirmed as soon as the payment clears.
            </p>
            <SearchBar />
            <div className='popular row'>
              <span className='small muted'>Popular:</span>
              {doctorSpecialties.slice(0, 5).map((s) => (
                <button type='button' className='chip' key={s.id}>{s.specialty}</button>
              ))}
            </div>
          </div>
          <HeroPicture doctor={doctorsDetails[0]} />

        </div>

      </section>
      <section className='how-it-works'>
        <h2 className="sr-only">How it works</h2>
        <div className="feature-grid">
          {
            FEATURES.map((feature) => (
              <div className='card feature' key={feature.id}>
                <span className='feature-icon'>
                  {feature.icon}
                </span>
                <h3>{feature.title}</h3>
                <p className='muted'>
                  {feature.description}
                </p>
              </div>
            ))
          }
        </div>
      </section>
      <section className='home-inner section'>
        <div className='row between'>
          <h2>Top-rated doctors</h2>
          <button className='see-all link-btn'>
            See all doctors
            <FaLongArrowAltRight />
          </button>
        </div>
        <div className='tile-grid'>
          {doctorsDetails.map((doctor)=> <DoctorTile key={doctor.id} doctor={doctor} />)}
        </div>
      </section>
    </>
  )
}

export default HomePage

const HeroPicture = ({ doctor }) => {
  return (
    <div className='hero-art'>
      <img src={heroImage} alt="" className="hero-art-panel" />
      {doctor && (
        <div className="hero-art-card top">
          <div className='row'>
            <Avater name={doctor.name} color="green" /></div>
          <div>
            <strong>Dr {doctor.name}</strong>
            <div className="small muted">
              {doctor.specialty} {doctor.location}
            <div className='hero-art-times'>
              <span className='on'>Open</span>
              <span>Open</span>
              <span className='taken'>Booked</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="hero-art-card bottom">
        <div className="row">
          <span className='tick'>
            <TiTick />
          </span>
          <div>
            <strong>Appointment confirmed</strong>
            <div className="small muted">Payment verified with Paystack</div>
          </div>
        </div>
      </div>
    </div>
  )
}



function DoctorTile({doctor}) {
  return (
    <div className="card doctor-tile">
      <div className="row">
        <Avater name={doctor.name} color={"green"} />
        <div className="small muted">
          {doctor.specialty}
        </div>
      </div>
      <div className="row between small">
        <span>
          {
            doctor.rating?.count ? <>
              <span className='stars'>⭐</span>
              <strong>{doctor.rating.average.toFixed(1)}</strong>
              <span className='muted'>({doctor.rating.count})</span>
            </>
              : <span className='muted'>New</span>
          }
        </span>
        <strong>₦{doctor.fee}</strong>
      </div>
    </div>
  )
}

