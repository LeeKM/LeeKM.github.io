export CMMSG=$1
if [ !CMMSG ];then
  CMMSG="auto"
fi

echo "commit message " ${CMMSG}

export COMMIT_CMD="git commit -m "${CMMSG}

echo "git status"
git status

echo "git add ."
git add .

echo $COMMIT_CMD
$COMMIT_CMD

echo "git push"
git push

