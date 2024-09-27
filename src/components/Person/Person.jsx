function doMarried(sex, partner) {
  if (sex === 'm') {
    return `${partner} is my wife`;
  }

  if (sex === 'f') {
    return `${partner} is my husband`;
  }
}

export const Person = ({ person }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age > 0 && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">
        {!person.isMarried
          ? 'I am not married' :
          doMarried(person.sex, person.partnerName)
        }
      </p>
    </section>
  </div>
);
