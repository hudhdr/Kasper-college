import { useState, useEffect } from 'react'
import './Student.css'
import dark_arrow from '../../assets/assets/dark-arrow.png'

const Hero = () => {
  const [courses, setCourses] = useState([])
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    fetch('http://localhost:5228/api/courses')
      .then(response => {
        if (!response.ok) throw new Error('Unable to load courses')
        return response.json()
      })
      .then(data => {
        const records = Array.isArray(data) ? data : data?.$values || data?.courses || data?.Courses || []
        setCourses(records)
      })
      .catch(error => console.error(error))
  }, [])

  const getCourseValue = (course, property) => {
    const aliases = {
      CourseAward: ['CourseAward', 'CourseAwardName', 'courseAward', 'courseAwardName'],
      CourseId: ['CourseId', 'Id', 'courseId', 'id'],
    }
    const names = aliases[property] ?? [property, property[0].toLowerCase() + property.slice(1)]
    return names.map((name) => course[name]).find((value) => value !== undefined && value !== null)
  }

  const scrollToCourses = () => {
    document.querySelector('#courses')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className='Student container'>
      <div className='Student-text'>
        <h1>Kasper College</h1>
        <p>Courses At Kasper</p>
        <button type="button" className='btn' onClick={scrollToCourses}>
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
      <section
        className='courses'
        id='courses'
      >
        <h2>Available Courses</h2>
        {courses.length > 0 && (
          <div className='slide-container'>
            <div className='slide-content'>
              <div
                className='card-wrapper'
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {courses.map((course, index) => (
                  <article
                    className='course-card'
                    key={getCourseValue(course, 'Id') ?? getCourseValue(course, 'CourseId') ?? index}
                  >
                    <h3>{getCourseValue(course, 'CourseTitle')}</h3>
                    <p>{getCourseValue(course, 'CourseSummary')}</p>
                    <dl>
                      <dt>UCAS code</dt>
                      <dd>{getCourseValue(course, 'UcasCode')}</dd>
                      <dt>Course type</dt>
                      <dd>{getCourseValue(course, 'CourseType')}</dd>
                      <dt>Course award</dt>
                      <dd>{getCourseValue(course, 'CourseAward')}</dd>
                      <dt>UCAS points</dt>
                      <dd>{getCourseValue(course, 'UcasPoints')}</dd>
                      <dt>Study length</dt>
                      <dd>{getCourseValue(course, 'StudyLength')}</dd>
                    </dl>
                  </article>
                ))}
              </div>
            </div>
            <div className='slider-controls'>
              <button
                type='button'
                onClick={() => setActiveSlide((activeSlide - 1 + courses.length) % courses.length)}
                aria-label='Previous course'
              >
                Previous
              </button>
              <span>{activeSlide + 1} / {courses.length}</span>
              <button
                type='button'
                onClick={() => setActiveSlide((activeSlide + 1) % courses.length)}
                aria-label='Next course'
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Hero
