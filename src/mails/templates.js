exports.welcomeHTML = `
<html>
  <body style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; margin-bottom: 20px">
        <img src="https://rapid-minds.com/rm-logo-black.png" alt="rm" style="max-width: 150px; height: auto;" />
      </div>
      <h2 style="color: #d9cb48; border-bottom: 2px solid #d9cb48; padding-bottom: 10px; text-align: center;">Welcome!</h2>
      <p style="font-size: 1.1em;">Hi {name},</p>
      <p>Welcome aboard!</p>
      <p>If you ever have any questions, feel free to reach out to us.</p>
      <p>Cheers,<br/>RM Team</p>
      <footer style="margin-top: 30px; text-align: center; color: #aaa; font-size: 0.9em;">&copy; ${new Date().getFullYear()}</footer>
    </div>
  </body>
</html>
`;
