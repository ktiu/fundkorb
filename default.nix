with (import <nixpkgs> {});
let env = bundlerEnv {
    name = "fundkorb";
    inherit ruby;
    gemfile = ./Gemfile;
    lockfile = ./Gemfile.lock;
    gemset = ./gemset.nix;
  };
in stdenv.mkDerivation {
  name = "fundkorb";
  buildInputs = [env bundler ruby];
}
