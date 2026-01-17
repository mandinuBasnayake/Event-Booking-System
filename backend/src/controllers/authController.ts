import { Request, Response } from 'express';
import { registerSchema, loginSchema } from '../utils/validators';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = registerSchema.parse(req.body);

    // Register user
    const result = await registerUser(validatedData);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: result,
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }

    res.status(400).json({
      success: false,
      message: error.message || 'Registration failed',
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = loginSchema.parse(req.body);

    // Login user
    const result = await loginUser(validatedData.email, validatedData.password);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result,
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }

    res.status(401).json({
      success: false,
      message: error.message || 'Login failed',
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  // With JWT, logout is handled on the client side
  // Server can optionally implement token blacklisting here
  res.status(200).json({
    success: true,
    message: 'Logout successful',
  });
};

export const getCurrentUser = async (req: Request, res: Response) => {
  // User is attached by auth middleware
  res.status(200).json({
    success: true,
    data: req.user,
  });
};
