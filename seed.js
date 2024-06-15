const mongoose = require('mongoose');
const Exercise = require('./index'); // Assuming your Exercise model is exported

mongoose.connect('mongodb+srv://aditya:aditya123@finalproject.zx9y8.mongodb.net/Excercise?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

  const seedExercises = [
    {
        "name": "Squat",
        "description": "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent, the hip and knee joints flex while the ankle joint dorsiflexes; conversely, the hip and knee joints extend and the ankle joint plantarflexes when standing up.",
        "reps": "20",
        "sets": 3,
        "exerciseImage": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/Female_Squat_Studio_1296x728-header-1-1296x728.jpg?w=1155&h=1528",
        "youtubeVideoLink": "https://youtube.com/shorts/GST195arZR0",
        "exerciseTips": "Keep your chest open, back fairly straight, and knees tracking over your toes with heels firmly planted on the floor",
        "generalFormCues": "Back straight, chest up, weight in heels"
    },
    {
        "name": "Plank",
        "reps": "60s",
        "sets": 3,
        "exerciseImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3uphC3XpaIznwHStUOVVDtPwP4RqtVkK0g&s",
        "youtubeVideoLink": "https://youtube.com/shorts/v25dawSzRTM",
        "generalFormCues": "Shoulders down and away from ears, hips in line with shoulders and ankles"
    },
    {
        "name": "Crunch",
        "reps": "10",
        "sets": 3,
        "exerciseImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI92-p8pevxNinQsaDMJWxpdMLOZBOKGsle2Sg7k44KOuRxyW2",
        "youtubeVideoLink": "https://youtube.com/shorts/uHHJOP68o6k",
        "exerciseTips": "Focus on squeezing your abdominal muscles and avoid using momentum",
        "generalFormCues": "Lower back pressed into the ground, hands behind head for support"
    },
    {
        "name": "Jumping Jacks",
        "reps": "10",
        "sets": 3,
        "exerciseImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpGdq1ryTlOvbr3wPTIMf7DOG3uTPuSNVKA&s",
        "youtubeVideoLink": "https://youtube.com/shorts/7Pxr4xOrhNk",
        "exerciseTips": "Keep your knees slightly bent and land softly on the balls of your feet, avoid overstriding",
        "generalFormCues": "Feet together, arms at sides, then jump to a position with legs spread wide and hands overhead"
    },
    {
        "name": "Walking Lunges",
        "reps": "10",
        "sets": 3,
        "exerciseImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0yiAIQ0RiivB0ko0EeWumNM7qVKlBSEDNg&s",
        "youtubeVideoLink": "https://youtu.be/tQNktxPkSeE",
        "exerciseTips": "Keep your front knee behind your toes, engage your core, and avoid letting your back knee touch the ground",
        "generalFormCues": "Take a large step forward, lower your body until your back knee almost touches the ground, then push back up to standing"
    },
    {
        "name": "Single leg deadlift",
        "reps": "10",
        "sets": 3,
        "exerciseImage": "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2019-05-09-at-4-52-51-pm-1557436377.jpg?crop=0.9727126805778491xw:1xh;center,top&resize=1200:*",
        "youtubeVideoLink": "https://youtu.be/HtHxnWmMgzM",
        "exerciseTips": "Keep your back straight, engage your core, and lift with your legs, not your back",
        "generalFormCues": "Stand with feet shoulder-width apart, bend down and grab the weight with an overhand grip, lift up to standing, squeezing your glutes and pushing your hips back"
    },
    {
        "name": "Pilates",
        "reps": "30s",
        "sets": 3,
        "exerciseImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB3JAFkGeb92FQgFjbyez7P0mLB8z96F49w&s",
        "youtubeVideoLink": "https://youtube.com/shorts/T_l5dopuCJs",
        "exerciseTips": "Focus on controlled movements, engage your core, and breathe naturally",
        "generalFormCues": "Start with a gentle warm-up, focus on proper alignment and posture, and move slowly and deliberately through each exercise"
    },
    {
        "name": "Burpees",
        "reps": "10",
        "sets": 3,
        "exerciseImage": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRIWEhgWFhgXFhsXExkWFxcYGBYYGBcYICggGRomGxcXITEhJiktMS4uFx8zODcsNygtOisBCgoKDg0OGxAQGy0iHyY1LS0wLS01Ly8tLi0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwEHAv/EAEwQAAICAQMBBQQCDgUJCQAAAAECAAMRBBIhMQUTIkFRBjJhcYGhBxQjM0JSYnKRkrHB0fA0c4K0whYkQ4OisrPD4RVEY3STlKPi8f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAjEQEBAAIBBAICAwAAAAAAAAAAAQIRAxIhMUEEURMiMmFx/9oADAMBAAIRAxEAPwD7jERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARKv2i7ZGlq3hDZYziuqsHG+xugLc7VHJLYOADgE4BzNntBqrA1B7pGxu75CVzWSRtVGYkNxjeG6cgKSsrcpPKZLWs1nbOnqYV231JYRkIXAcj1CZyRyPKd9NrK7Pvbq2MZ2sCRnpkDpMQm3TUnuyu8nc2UxuJPJ4Xluep5JPJ5zOt3Y1m4ahLimoTLL3aqlbefd2Ljxoeh8/QiUnLur/AI63MTjotSLK0sXO10VxnrhgCM/HmdpqzIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgYz2/Y97pAPNrOfjmoD/eJ+iZftvSbrBYdwJtY5Ujctg5pODwAaq7VOeD04OJrvsj1fcaLQcd3qlBOM/flelP/AJbKj/ZlN2brKxqdRXqONO2kfUEkkeCruCW3A+Eq1jkEcg8iZZTeTSX9XDsqnvr1G0BKiHyQcnHnnG05b9jec0/aOkNiqoYLixGPgDkqrAso3e7kZG7qM8Sh7N1KJTT3llVWs7it3RmUMNw3MrLnIQtu+GenSX2n1YfwbWL7ct3YZgoPTxgADPUZwfOZ6+m01J3Wns/eGpABB7s93uHKsFxhgfPjGfRgw8pZSH2PQUorVgQwQbsncdx5bLeZyTzk5+MmTojmpE83D1jMlD2J4TPYCJ5mCYHsREBERARE8JgeyB2t2tXp1y+SxztRcF2x1xkgAcgbmIAyMkZmW9odW9+qagMwooUblUlQ9jjcGYrywVQ2E6ZBJz4dtB2Rr6i4W7fZqACAbW3sa0d1UAtzlOjck5OSTuyc8s9LzHbaV9vag+IaRAnGN2oAt+IZQhQeXRzJfYXtHTqWetcrdXgvW3DBSSA4/GQ4OCP3iZmoC/U7WTArUlx4lBz7vhYfEnIPlLJwqX0CtArK4IC7Bmtz3bjaDuK+NW6YyiyuOd33WuE1uNZEAzzM2ZPYiICIiAiIgIiICIiAiIgZ37IVeezdWeMpQ1q56b6vuqH6GQH6J81TVW6jULp6nK4LqxKg7EXuXbGeCEYIOcgvYmcqrg/XO3tI91D1IQDZhCSMqFJG8kfheHPHmcdOownsfoKxfq2XJUWtVWWJLFK7bQ7E+pu73pxhVxgATPP7aYd7ppey+z66E7updoySTyWZj7zOx5dieSxyTPfYuxV+2tOqhRTqmKj8ZLgLd3y3tag9O6x5YHPtbUKiHLAbgQM8rwCWZungA5PI6Y8+YvZWiuairUI5r1JL2jcuEZLWLrTcnUDaU5HiVhkcbg2H5Zx977ack3NRs54RIXY/aQvr3BSjqxSxG95LF95Tjr1BB6EFSOCJOnXLtzuJqOPj5fPr+6edx8fl+/653iBw7g+vPr9Ed0f5z6jj5TvEDh3R68Z/+xP7/qh6ifMTvEDitRyDO0RAREQE5vXkzpEDEaztYLqtSgUqaw7OccMwqpet1+AVyPiQ0hX2BAHUeC3d3D92pWpgvdsinqTuTvfF1zgZwdvb2qrFfaSFuF1Gm+jdQ5Rv1hqax8k+EqezddYdOmjrXvnTW73wSqCpNlyZcAqjFnQhW6hX9BnK+a0niNb2Y4IOVw4OD6kdA3U8HafTp04nTUFFIbADuyVBgBu8TYHOD0znn0lTqNQyHvNRV3K1qT3tdu+oKOSHOEcDz5QrxyRxLnR9l32bWvetE3pYK1Q94ux1dQ1hfaTlRkBPUAnrIx3avl0yLlam24JGfMjjJ8+PKeCk+v1n0xJETZg/NYwMT9REBERAREQEREBERAREQK/tvXGqvw471z3dQP47A4OPMKAzkeiGU+l09enqCjO1FAycs5+fmzEn5kn1Mk68h9Rnr3I2fAM4VmOPM42c+WD6nNFq+2kXVmq1lStaxsZiADcPFYvP4QrtpIH5T+nHPzZWePTfjmpt+6Oynvt7zUt4WI20gcKg5Fdj5O/LAMwXAJwpLKozodVqNgLH3ceWSf0DkzPH2kqV9qV33OBnbXS3IOcHfZtTHx3TtdqtU6M9ijTVBSSikW6phj3d33usnkYG/ORhlnB0cnJd5L/4tPZZGY3agqyJcyFFcAMQq43kDpkEKAecVr6y/ld7O/0TT/8Al6v9xZYz1ccZjNRzW7IiJZBERAREQEREBERAThq9WlYy7Y9BglieuFUcsfgBIvbmseqsGtQWZwuT7qg5yxHn0wB6kSrqcYFjklivLPjfjrg7RgDzwMAGUyz6V8MOpG7T0g1d1b3VlVp3NWu7xEuNp7wqcdB7gz0BJ8hNppRAFVVVVGFAAUAegA6DgfokDVdrNtLU0tYACSxwleAM53Nyw+KhpU6suzOupsakAgoajsqYcEE3EeJgcgqdoIzlWHMwuW73reax8LjtzV7abMDJKlemVUN4SzeRABJxnnGByZoOybmK92/3yvCk/jj8Fx8wOR5EEc8E5Giz7YdKKkY0I6vfbtK1kJhq6q24FhZgpYrlQoYHkiaLXK4HeVAG5ASgPAbpurJ8g2AM+RCnBxiZ/nmGcnr2pnOpdRI+g1a3VJamdliK65GDhgCMjyPPSSJ3MCIiAiIgIiICIiAiIgIJiQe3mYaa8r7wosK/MIcfXAoOytSDR9sMcLZvvJPkjk2DPyUgfRKu/sSy4UspK6lDbrAMgA2HaO4c49012GrPoufKXQrUJXSOhA4/ITBI+R8Kn86WHZte5nsU+lfw8Jbdj15bHzSY4zdb53UVGlcPtYcqyggEeRwQSD0ljj1+n0kRSqW2p4RstJAG7gWLv5z6sx6cfLoJ0rcV5lv099kbidMlbHNlH3B/iagArY8t6bHA9HEuZj9B2rQt9hF6itgtZOcJ3yMeN58G7DBOD1UKeVk4+2GgAI+39IDkn+k09M/nzeXcc+U1WiiVei7Srt+9X1vn8SxGHuj0PXMsq8456yVX6iIgIiflxxA/UTgazjjr/Hr/AD8J5sYfs4xnA6dYEiJwKN1+f6OOkAN/Hp8enw6QIXtDbtrT43Vj/ayPrAlV2igJqQ+61vI8sIjuM+o3KvEm+0lDHTkltu22mwseRtrdGfpk9FI+mR7iptq58W2xgOcYwik/7Y/TMs53bcd1Fb2zVfZp9UytgU1PkIN1ljivvAg3DAUgqD1J3EDbjJskbIyOQRkEeh5En9hKCrMM7XtsznHVWNZ+Y8HHwxMhoOx6ArUPUr9xa9QFn3TaqnNQ8ecfcjWcD1mHPwdcicMrbWo02pQDl1HPmwkTXa5lO2gd7a4YoqlTjGAWYsQFUFl8/PzkPs3sbTr4l09QbpuFSKSByAcL05+uTNKi/btKqACtNrtgAeElEA+ljn+xMcPi49U3VstybXfY+kNVKVsQXAyxHu7mJZtv5OScfDEmRORQ5npOZ1iRxU37voHT+fjPdrfH6vT9nSB3iRwr/wA4x/8Ak9w3Gc8EeY+P/SB3iR8NtAAII+X8Y2tzjPn6euRiBIieCewEREBK32is26dvymSv/wBSxU/xSm1XtzUpwlVjckclVHH0mQbvakah662TuxuyDvzmzBCAgqB1ORz7yrIt7LSd05bh9ssCR4aFI9fE7b8evupn049Zedg1FdPUD7xQO/57+Nz9LMTMb2x2mtlT7MblIIYoDjmo8buOUtA6eZ9Jx9n+27ltqXeNtlqJtd7HypA3Bd7HDDDlceQwc9RnxtOTusPaG81a6w7Sy2aWjbyAN6WagPk+XDV9AekrtVbZfgWWEVdDXWdinpgO3vP58AqpBwVMuvbtNrUWH3SWqJ8tzYavJ8h4XHzYDqRM8DOT5GeUz09L4XDhlxzK967Np0wq7BgDAGBtA9AOgHlxLXsCoMLHKg+PYvA91AP8ZcfRKkWjGDkfL+eJb+zdq9x1/wBNf/x7JTh87afMusZEzVdl0WDFlFTj0etWH6CJyTsapcGrvKcdBTa9dY/1Snuz9KmTe+X1nnfr6/VOndjz7JXOqzVV423rcPMXVgOfgLKdqr+oZMTt0L9/rNfGSysLKwM4zkYcKM8sUAHUnEitqkHVgM9M8T1bFcZRgfQgg/z0lpyZRS8eNaEGJQez2vUWPoyQHrRba1/8FyRgD8l1YYHAU1y/m8u457NXRERJQREq+0/aDT6dtlrkNjOBW78fHYpA+mBM7R03e1WVfj1sn6ykfvmYrtDPprDxvqdR83CPj54rb9E6632404rfut5fadua2Vd2OM7scZkZTSqJScEIAq5OHG0oFO4chvEpyMe8PWZcjbi9tD7PfeB/WW/8Z5n+0q+719g4C30JcPU2VHurT+odMJTdm+019f3OtBtDWE7m3LuLhhyRu8RawkEnGODjiXnamsFw0Gp27TaHABIJC2Vd6RkcEZqU/RLXvirj2yT9N7o/nznO1tlldvTbaqsfMpZmvBPoGZXP5shX9sVVDYcvZ1FaDdYQehI4Cr18TEDyzK3VX2WhgT3SspUqp3Eg5HJYbc49FBHqROa5zC7rrx4cuSaxj6HPCcdZ8+0t+qvsrrv1dgHcuzLQFoViprUZbxWA+Pna45Hl0ln/AJPaU430raR+Fdm9/wBe4s31zec2Nm458uDLG6yaK7tfTp799S/nWKP2mcV9otGemr05/wBcn8ZX1aKpfdqRfkij9gnYKPSPy/0j8P8AaenbOmPTUUn5Wof3yaDnkShtqDDB6Z8uP5+U59mOunsVM4qtO0L+AluCRtHRA4BBA43BcDLHM48m7pGXHqbaOIiaMiIiAiIgVGo9l9DYd1mi0zknOWorY5Pnkr1n70/s3o09zR6dfzaUH7BLSIGU9suzqatK9iJtIatQFJC+O2tPcB29D6cYmT9mOdbQp/GXHwwl7H9OwfqzY/ZGP+YP/Xab+81TK+xNW7WqfxBn5fcmH/M+uR7W9PpOt0iWo1dihkYYYHoR+4+efLExuq9jtQhPcXJan4K35SwfA3IG3DyGUzxySZuYlc8Mc/5Rbj5c+O7wumC0vstrW++HTVfFXe8/qlK/2yyq9iyqbRr9UviJ8I04GWJYgBqTxknqSfjNXEjHiwx8Rbk+Rycn8qzNXsvav/frX/Pqpz/sIs6f5MMfe1l3yVKVH11sfrmiiW6Z9M+q/bMX+xFDMHFuoVx0IuYdPIhccfAY6yP2HqAwZTjejbW+ZAbgnnow+ua+fO+37/8As/WBip+17yxLAE7eS7HP5LPYWGPccEcVNK547nZbjy1e6819Jyt1a5vqyyeRYH36s+jrxzwDtbqomi0mpW1FsQ5R1DKfUMMiU6MGAIPBwQQfpnns7cEss0x4GTfV+a7fdVHqVtJJ9BcgleO+l+XH2v4iJswJTdsezNGpffZvDYA8DlcgdOkuYgZdfYPSjzu+m1p1q9jaUx3dlyBRgDcLOMgjm1WPG0YGcDAHQCaOJGondfEls8Cg87toJ9fubMc/PaR9M1fb9DVafsytTs2IFJA5wum24U/gnrz6Zxg8jF8muoDqen/t7v34n1b2w7Ha6hTUM20OLa14G7Csj15JAy1buBk43bSeBKZS3GyNMLjM8bl4Y7SotfugAE5PqSepJ6lvieZNVwRx1+uV9F6uMr6kEEEMpHVWU8qwPBU8idJ5N3vu+kmtdvCZobNmop4IDb6gfLms2f8AK/ZNKbV9f3zEWliypWpe/crpWmN7bGB8+FU+6WJAG7rNR/2Prn6PpqBnjKvqGxzjOGqAPTjLAc8mdnBjcsXk/Msx5PKY2pHlkyDqu1cMKxlrCMhEBazHkSqgsFzxuxgecnU+y+fv2pusBHKptpT5g1gWD9eXGg7PqpXbTWlak5IUAZJ6s34zH1PM6Jx/bivL9Mfob7TcKtQHqswXC+DBXgDO1nPVhzkZweBjEs+1NAl9fd2ZxuVgVJVldGDI6kdGDAEfKRvbjSMj162sEmvCuo6sMkKBnA5FloGTje1ecAGTNBrEurWxCGRhkH/oeR8j05ErnNVfC7ndbdjaw2V+PHeodlmOBvAHIHkGBVwPRxJ0zdOo7nUIxPguIpf0D8mhvQZy1Z9S1Y8ppJtjdxhlNXRERLKkREBERAzH2R/6A/8AXab+81TP/Y4A+2rjjnbx/ZTTqfrJmg+yP/QH/rtN/eapU/Y2HjvOOfX4Fsf4B+iR7T6b2IiSgnjT2IHDc2M88fz/ABngZvPy88ZHPPQenT6ZIiBHLt1x59PokXtTRrfWa7FypIOQCGUgja6t5MOoI6SyiBjNLpxotlLECpi4rZ7FXogfaEIUL0tO0HwgcDb7ljbRl67QxDVsTxjxKVKuh+B4PXqinylz2hoa7q2qtXcjDkefqCCOQwOCCOQQDMboNQ2lv+0bmyMbqLDxvTnC+m4YPH5LcAYznlNd41xu/wBa2dGo3BWUhkYZDLyCDyCD0wRJEzelutpdKalrapy5Ad2Uo3vbVwrZQ5Y+W3gDjGKbTe03aN7IE0tVdbojb1sawqtgtKsS1YHBp2kYP3xOeTieuKXGy6b2JkbuysIb77XN6KWV1YgVsATlPMj1ViV5IxgnOq05bau/AbaN2Om7HOPhmTjnMvCLNOk5sTn4TpEsh8u7I0+msGnDbQ1lYsAB4XYtdb1+uWNjED4CfSu8b08/Q8fxnyD2cX7rpB+XX8/vlB/cRPs0iJqg7V9nqNQd9lZW3AHeVs9dhAztDNWRvHXAbIHpzIP+RlH4T6gjByDawHkOGr2t0JPXymtiRccb5i05M8ZqWqrsrsynTIVoqVMtliFJZiOAXc+JzjAySTJosb0+o8cfxkiJZR+UORP1EQPxdUrqyOoZGUqykZUqRggg9QR5T53qdDb2ZeXXc+hufnqzV2McDd55PAz+Hx/pPv8A9Hn4vpV1KOoZGBVlYZUgjBBB4II8pFm0y6ZrWULqKSobAdfC64JU+8jqemVYKwPwEuuxtY1tKs4AsA22KOgsXhwM87cjIPmCD5zI30t2dcFJLaK5sISctVYedjE9VPJDHnqTyGZrazVnT79QqmysputRcbztHFibiFLbRggkZAXB8OGyx/W6rXL95uNNEy+v9s1rs7n7U1Js+58AVlR3ved2SVsJwe5s6A4289ROWm12p1ihgTp6GVXUry7K6hgQwPPBBBBGM4IPImlzkZaa2Jgtb7Y6jSudOaPtju8DvjZ3bOCAQWVayN2DgkYBIJAGcBJmUNN7ERJQzX2RB/mL/wBbp/7xVKr7GIB+2G/KA+gWXH98vfbbSWW6N0qUu++lsDrhLq3bHqdqk488T32S7ETTUjCstlio1oLE4s2DcAMkDnPA4yTIT6XkRElBERAREQEREBML9kbS77tHuZqwztWlqjISxijqrYIOHNYHUcKwyCRN1Kf2t7I+2tJbQOHKhkO4p41IZRvXxKCRtJHOGMizcTFf2P2dcrh77FcqjKm38tlLFuB0CKB1PLZJzLPUahKl3OyoijqeFA6fIeQme7M9p666dusdadTW3dvU7obi+MphKydzOhVgqZ97AzLfsai22wai5TWgBFNTffPFjNto/BYgYVOqhju5O1OaYXKtLXtNDah1cgpp0IYBgVe1wcqSp5WtTg4OCxA6KPHfRE6McZjNRnbsiIlkPjvseudVpl/JQ/q+L/CJ9inzH7HXYwttTVCwj7XzUygAhnNe1lY/gshPI+PlPp0iJpERJQREQEREBERApPbSpW0V4YLt2AksMqoDAmwj8kAt/Z5mT7HGrfT11d3vqtrUC4MmBW+CzMxfeW7stwEPjxzjmfRbEDAqQCCMEHoQeoMxHsra2nuu0Fu/7mz2UMyMFagvwquRtfaHTJU8bwp5XnLl3ra+FaQ6VN5s2LvIUFsc4QsU+WN7/rGR9frCv3OpRZew8CA4A8tzn8CsebfQASQDC7T172s2l0vN5XDOMbNOCOLLCQRuGcrX1c+i7mGh0PZ9VIIqQLuOWPVmPTc7Hlm+JJMzw4+rvU26cdB2YqVqrgWPyWcqMszEsxwc4GScDPAwPKeydE6WZERAREQEREBERAREQEREBERA/JQZzgZ9fP8ATP1EQEREBERAREQEREBERAREQEREBIXaXZVN4XvU3bSSpDMrDIwcMpBwR1HnJsQI+g0NVKCumtK0BJ2ooVcnknA8yeSfOSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf//Z",
        "youtubeVideoLink": "https://youtube.com/shorts/S8vL5DK04fU",
        "exerciseTips": "Keep your back straight, engage your core, and explode upward in the jump",
        "generalFormCues": "Start in a standing position, drop into a squat, kick back into a high plank, lower to the ground, rise back to high plank, return to a squat, and jump up"
    },
    {
        "name": "High Knees",
        "reps": "10",
        "sets": 3,
        "exerciseImage": "data:image/jpeg;base64,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",
        "youtubeVideoLink": "https://youtu.be/ZZZoCNMU48U",
        "exerciseTips": "Keep your back straight, engage your core, and explode upward in the jump",
        "generalFormCues": "Start in a standing position, drop into a squat, kick back into a high plank, lower to the ground, rise back to high plank, return to a squat, and jump up"
    }
];

const seedDB = async () => {
  try {
    await Exercise.deleteMany({});
    console.log('Exercises removed');

    await Exercise.insertMany(seedExercises);
    console.log('Exercises added');
  } catch (err) {
    console.log(err);
  }
};

seedDB();