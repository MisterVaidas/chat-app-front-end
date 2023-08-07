import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1> About Quacker</h1>

        <p>
          Welcome to Quacker, the ultimate destination for developers who demand
          seamless and efficient code collaboration while staying connected in
          real time. Quacker goes beyond the ordinary instant messaging app,
          offering an innovative platform that integrates dynamic code editing
          capabilities right into your conversations.
        </p>

        <h2>Our Mission</h2>

        <p>
          At Quacker, our mission is to empower developers worldwide to
          collaborate effortlessly, share ideas, and co-create in a fluid and
          productive environment.
        </p>

        <p>
          We recognize the challenges developers face when collaborating on code
          remotely, and we've designed Quacker to bridge those gaps, enabling
          you to work together as if you were in the same room.
        </p>

        <h2> Key Features</h2>
        <ul>
          <li>
            Real-time Messaging: Quacker's intuitive instant messaging interface
            allows you to communicate seamlessly with your peers, clients, or
            fellow developers, ensuring clear and concise discussions around
            your codebase.{" "}
          </li>
          <li>
            Live Code Editing: Say goodbye to switching between different tools
            or platforms for code collaboration. With Quacker's inbuilt code
            editor, you can write, edit, and review code snippets right within
            your chat window. Experience the convenience of simultaneous
            real-time code changes, making collaboration smoother and more
            productive.
          </li>
          <li>
            Syntax Highlighting: Quacker's code editor supports syntax
            highlighting for a wide range of programming languages. This ensures
            that your code remains clean, readable, and error-free, even in the
            midst of rapid collaboration.
          </li>
          <li>
            Version Control Integration: Seamlessly link your Quacker account
            with popular version control platforms like Git. Keep track of
            changes, revert to previous versions, and maintain a clear history
            of your collaborative coding sessions.
          </li>
          <li>
            Multi-user Editing: Collaborate with multiple team members on the
            same code snippet simultaneously. Watch your code evolve in real
            time as you brainstorm, troubleshoot, and refine together.
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
