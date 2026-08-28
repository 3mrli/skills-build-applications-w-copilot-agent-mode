import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
}, { timestamps: true })

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  memberIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true })

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true, trim: true },
  duration: { type: Number, required: true, min: 0 },
  date: { type: Date, default: Date.now },
}, { timestamps: true })

const leaderboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, required: true, min: 0, default: 0 },
}, { timestamps: true })

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  duration: { type: Number, min: 0 },
}, { timestamps: true })

export const User = mongoose.models.User ?? mongoose.model('User', userSchema)
export const Team = mongoose.models.Team ?? mongoose.model('Team', teamSchema)
export const Activity = mongoose.models.Activity ?? mongoose.model('Activity', activitySchema)
export const Leaderboard = mongoose.models.Leaderboard ?? mongoose.model('Leaderboard', leaderboardSchema)
export const Workout = mongoose.models.Workout ?? mongoose.model('Workout', workoutSchema)

export const resources = {
  users: User,
  teams: Team,
  activities: Activity,
  leaderboard: Leaderboard,
  workouts: Workout,
} as const

export type ResourceName = keyof typeof resources
