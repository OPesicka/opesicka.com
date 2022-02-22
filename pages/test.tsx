const array: any = [
  {
    name: "lol",
    href: "/",
    meta: {
      title: "Hrubeš",
    },
  },
  { name: "panda", href: "/" },
  {},
];

type Item = { name?: string; href: string; meta?: { title: string } };

const renderItem = (item: Item) => {
  //   if (item.href === undefined) {
  //     return null;
  //   }
  return (
    <li>
      <a href={item.href} title={item.meta?.title}>
        {item.name}
      </a>
    </li>
  );
};

export default function a() {
  return (
    <>
      <ul>{array.map(renderItem)}</ul>
      <h1>hello</h1>
    </>
  );
}
