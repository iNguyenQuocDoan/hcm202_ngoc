'use client';

import { storyScenes } from '../scenes';
import { StoryScene } from './StoryScene';
import { StoryProgress } from './StoryProgress';

/**
 * Top-level wrapper for the cinematic theory experience.
 * Owns the scene rail and lays out each StoryScene back-to-back.
 * Each scene self-manages its own scroll-linked motion.
 */
export function StoryStage() {
  return (
    <div className="theory-story relative">
      <StoryProgress scenes={storyScenes} />
      {storyScenes.map((scene, i) => (
        <StoryScene key={scene.id} scene={scene} index={i} total={storyScenes.length} />
      ))}
    </div>
  );
}
