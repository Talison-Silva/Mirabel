function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function nameComponents(name) {
  var process_one = name.split("/");
  var process_two = process_one[process_one.length - 2];

  let nameComplete = "";
  process_two.split("-").map((v) => {
    nameComplete += capitalizeFirstLetter(v);
  });

  return nameComplete;
}

const register = (app) => {
  const modules = import.meta.glob("@/components/**/*/index.vue", {
    eager: true,
  });

  Object.entries(modules).forEach(([path, module]) => {
    var name = nameComponents(path);

    app.component(name, module.default || module);
  });
};

export default { register };
