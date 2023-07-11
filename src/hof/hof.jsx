
const SectionWrapper = (Component, idName) => function hoc(){
  return (
    <section
    className="main_wrapper"
    >
    <Component />
  </section>
  )
}

export default SectionWrapper