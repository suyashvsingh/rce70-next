<br />
<div align="center">
      <img src="public/images/logo.png" alt="Logo" height="80">

<h3 align="center">
  <a href="https://rce70.vercel.app/">
      RCE70
  </a>
</h3>

  <p align="center">
      Remote Code Executor
   <br />
</div>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://rce70.vercel.app/)

Users can run code on the web without having to install any IDE or text editor. And it's free! The user can also download the code. The app currently supports 5 languages, C++, C, Python, Java and Javascript. The app is hosted on Vercel. The app is also serverless, and uses AWS Lamda to run the code.

## Tools Used

[![Next][next]][next-url]
[![Tailwind][tailwind]][tailwind-url]
[![AWS][aws]][aws-url]
[![Vercel][vercel]][vercel-url]

## Packages Used

1. Axios
2. Monaco Editor
3. React Hot Toast
4. React Icons
5. React Select
6. React Spinners
7. js-file-download

## Live Demo

https://rce70.vercel.app : Frontend hosted on Vercel, and uses AWS Lamda serverless service

## Main Features

1. Multiple language support

    ![javascript]
    ![python]
    ![c++]
    ![c]
    ![java]

2. There are three text editors, one for the code, one for the input and one for the output

3. The code can be run using the Run button or <kbd>Alt</kbd> + <kbd>Enter</kbd> key

4. The code automatically get saved in the local storage, so that the user can continue from where he left

5. The user can reset the code using the Reset button

6. The user can download the code using the Download button

## Thought behind the project

1. Researchers could use a Remote Code Executor app to test the security of different applications or systems, without having to run potentially dangerous code on their own machines.

2. Developers could use a Remote Code Executor app to quickly test code snippets or entire applications in a controlled environment, without having to set up a local development environment.

3. A Remote Code Executor app could be useful for teaching coding concepts and techniques, particularly for online courses or tutorials. Students could experiment with different code examples and receive immediate feedback, without having to install anything locally.

## Working

1. The user writes the code in the code editor

2. The user gives the input in the input editor

3. The user clicks on the Run button or presses <kbd>Alt</
   kbd> + <kbd>Enter</kbd> key

4. The code is sent to the server.

5. The server creates a random file name and saves the code
   and input in the file with the respective extensions.

6. The server runs the code using the respective compiler or
   interpreter, with a timeout of 10 seconds.

7. The server sends the status, data and execution time to
   the client.

8. The client displays the output (or error if any) and
   execution time in the output editor.

## Getting Started

### Installation through Source Code

1. Clone the repository

    ```sh
    git clone https://github.com/suyashvsingh/rce70-client.git
    ```

2. Install NPM packages

    ```sh
    npm install
    ```

3. Start the application

    ```sh
    npm run dev
    ```

4. Application will run on PORT 5173

5. Write the code, and give any input (if required)

6. Run the code using Run button or <kbd>Alt</kbd> + <kbd>Enter</kbd> key

## Team 😃

Made with love by:

1. Sanket Diwate (2020IMT-031)
2. Ketan Prakash (2020IMT-044)
3. Aditya Pote (2020IMT-069)
4. Suyash Vikram Singh (2020IMT-104)

[product-screenshot]: public/images/HomePage.png
[next]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[next-url]: https://nextjs.org/
[tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[aws]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[aws-url]: https://aws.amazon.com/
[vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[vercel-url]: https://www.vercel.com/
[c++]: https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white
[c]: https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white
[python]: https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white
