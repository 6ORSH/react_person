function getParnterStatus(sex, isMarried, partnerName) {
  if (!isMarried) {
    return <p className="Person__partner">I am not married</p>;
  }

  return (
    <p className="Person__partner">
      {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
    </p>
  );
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age > 0 && <p className="Person__age">I am {person.age}</p>}
    {getParnterStatus(person.sex, person.isMarried, person.partnerName)}
  </section>
);
