import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    // Seed the octofit_db database with test data.
    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const teams = await Team.create([
      { name: 'Summit Striders', memberIds: [] },
      { name: 'Trail Blazers', memberIds: [] },
    ]);

    const users = await User.create([
      { username: 'alex.morgan', email: 'alex@example.com', teamId: teams[0]._id },
      { username: 'jamie.lee', email: 'jamie@example.com', teamId: teams[0]._id },
      { username: 'casey.patel', email: 'casey@example.com', teamId: teams[1]._id },
    ]);

    await Team.bulkWrite([
      { updateOne: { filter: { _id: teams[0]._id }, update: { memberIds: [users[0]._id, users[1]._id] } } },
      { updateOne: { filter: { _id: teams[1]._id }, update: { memberIds: [users[2]._id] } } },
    ]);

    await Activity.create([
      { userId: users[0]._id, type: 'Running', duration: 35, date: new Date('2026-08-25') },
      { userId: users[1]._id, type: 'Cycling', duration: 50, date: new Date('2026-08-26') },
      { userId: users[2]._id, type: 'Strength training', duration: 40, date: new Date('2026-08-27') },
    ]);

    await Leaderboard.create([
      { userId: users[0]._id, points: 420 },
      { userId: users[1]._id, points: 365 },
      { userId: users[2]._id, points: 310 },
    ]);

    await Workout.create([
      { name: 'Morning Momentum', description: 'A balanced full-body session to start the day.', difficulty: 'beginner', duration: 25 },
      { name: 'Hill Strength', description: 'Build lower-body power with controlled intervals.', difficulty: 'intermediate', duration: 40 },
      { name: 'Peak Circuit', description: 'A demanding circuit for experienced athletes.', difficulty: 'advanced', duration: 55 },
    ]);

    console.log('Database seeding complete: 3 users, 2 teams, 3 activities, 3 leaderboard entries, and 3 workouts');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
