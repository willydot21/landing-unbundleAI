
export default function Hr({ mx = 'none', my = 'none' }: {
  mx?: 'none' | '1' | '3',
  my?: 'none' | '1' | '3',
}) {
  const mxClass = {
    'none': '',
    '1': 'mx-1',
    '3': 'mx-3',
  }[mx];

  const myClass = {
    'none': '',
    '1': 'my-1',
    '3': 'my-3',
  }[my];  

  return (
    <hr className={`w-full ${mxClass} ${myClass} border-gray-200`}/>
  );
}