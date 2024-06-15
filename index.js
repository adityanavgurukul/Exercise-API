const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://aditya:aditya123@finalproject.zx9y8.mongodb.net/Excercise?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    reps: {
        type: String,
        required: true,
        min: 1
    },
    sets: {
        type: Number,
        required: true,
        min: 1
    },
    exerciseImage: {
        type: String,
        required: true
    },
    youtubeVideoLink: {
        type: String,
        required: true
    },
    exerciseTips: {
        type: String,
        trim: true
    },
    generalFormCues: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);


app.get('/api/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = Exercise