if [ "$VERCEL_GIT_BRANCH" != "main" ] && [ "$VERCEL_GIT_BRANCH" != "production" ]; then
  echo "Ignoring build on $VERCEL_GIT_BRANCH"
  exit 1
fi
