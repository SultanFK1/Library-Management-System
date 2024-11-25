import { sendReturnNotification } from './controllers/returnNotificationController';
import sendEmail from '../config/mail-service';
jest.mock('../config/mail-service'); // Mock the sendEmail function



describe('sendReturnNotification', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { userId: '123' } }; // Mock request object
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }; // Mock response object
  });

  it('should send an email successfully and respond with status 201', async () => {
    // Arrange: Mock sendEmail to resolve successfully
    sendEmail.mockResolvedValueOnce('Email sent successfully');

    // Act: Call the function
    await sendReturnNotification(req, res);

    // Assert: Verify the response and email call
    expect(sendEmail).toHaveBeenCalledWith(
      'farshad389@gmail.com',
      'Media Return Reminder',
      expect.any(String) // The email content
    );
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'Return notification sent successfully' });
  });

  it('should handle errors when sendEmail fails', async () => {
    // Arrange: Mock sendEmail to throw an error
    sendEmail.mockRejectedValueOnce(new Error('SMTP server not reachable'));

    // Act: Call the function
    await sendReturnNotification(req, res);

    // Assert: Verify the error response
    expect(sendEmail).toHaveBeenCalledWith(
      'farshad389@gmail.com',
      'Media Return Reminder',
      expect.any(String)
    );
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'SMTP server not reachable' });
  });
});
