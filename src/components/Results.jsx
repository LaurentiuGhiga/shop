export default function Results({results}) {
  return (
    <div>
        {
            results.map((result) => (
                <div key={result.slug}>{result.name}</div>
            ))
        }
    </div>
  );
}
