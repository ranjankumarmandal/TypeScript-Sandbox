# About

Q. What is TypeScript ?

=> TypeScript is an open source language and is a super set of JavaScript.  
=> That means Vanilla JavaScript is also a 100% typescript. It just adds some extra features like static-types etc, on top of JavaScript.  
=> The main reasion to use typescript is to add static-types to JavaScript, rest most of the things are same.  
=> It is very helpful when it comes to avoid errors and maintaining unit testing for react development.  
=> Browsers knows only JavaScript they don't know TypeScript, hence typescript compiler compiles down typescript to pure JavaScript with version as mentioned in file tsconfig.json in our react project, mostly target is set to es5 there.  
=> For more learning, search on google 'TypeScript vs Babel'.  
=> The noEmit option tells TypeScript that we only want to run type checking and do not want the compiler to output any transpiled code. Once a tsconfig.json file is present, VSCode (or your favorite IDE) should detect that TypeScript is used and automatically type check your code.  
=> create react app with typescript, most are same -

                            npx create-react-app appName --template typescript

Q. Why yarn for installing dependencies when both yarn & npm downloads dependencies from the same npm-repositories ?

=> As mentioned above, while NPM installs dependency packages sequentially, Yarn installs in-parallel. Because of this, Yarn performs faster than NPM when installing larger files. Both tools also offer the option of saving dependency files in the offline cache. Comparing the speed, yarn is the clear winner.  
=> Yarn and NPM download packages from the npm repository, using yarn add vs npm install command.  
=> Install yarn with npm -

                            npm install --global yarn

Note - This is just my personal public contribution, can be used for educational purpose, can't be used for business purpose.

If you have some query, feel free to connect with me here -- [Ranjan Kumar Mandal](https://www.linkedin.com/in/ranjan-kumar-m-818367158/)
