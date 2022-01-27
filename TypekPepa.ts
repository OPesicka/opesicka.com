const JavaPepa = {
  a: "bé",
};

const JavaKarel = {
  b: "bé",
};

type Obj = { a: string };

export function func(obj: Obj) {
  console.log(obj.a);
}

func(JavaPepa);
func(JavaKarel);
