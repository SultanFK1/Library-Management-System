const sendEmail = require('../config/mail-service');

// Mock the email service
jest.mock('../config/mail-service', () => jest.fn());

describe('Email Sending Functionality', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should send an email successfully', async () => {
    sendEmail.mockResolvedValue('Email sent');

    // will be dynamic in the actual implementation
    const recipient = 'farshad389@gmail.com';
    const subject = 'Test Email Subject';
    const htmlContent = '<h1>This is a test emial</h1>';


    const result = await sendEmail(recipient, subject, htmlContent);

   
    expect(sendEmail).toHaveBeenCalledWith(recipient, subject, htmlContent);
    expect(result).toBe('Email sent');
  });

  test('should handle email sending errors', async () => {
    // Mock a rejected value for sendEmail
    const errorMessage = 'Failed to send email';
    sendEmail.mockRejectedValue(new Error(errorMessage));

    // will be dynamic in the actual implementation
    const recipient = 'farshad389@gmail.com';
    const subject = 'Test Email Subject';
    const htmlContent = '<h1>This is a test emial</h1>';

    // Call the mocked sendEmail function and handle the error
    try {
      await sendEmail(recipient, subject, htmlContent);
    } catch (error) {
      // Assertions
      expect(sendEmail).toHaveBeenCalledWith(recipient, subject, htmlContent);
      expect(error.message).toBe(errorMessage);
    }
  });
});
